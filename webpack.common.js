const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');



module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: "imgs",
                        publicPath: "imgs/",
                    }
                }
            },

            {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[ext]',
                        publicPath: './fonts'
                    }
                }]
            },
        ]
    },
    plugins: [
        new WorkboxPlugin.GenerateSW({
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],
            exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/,],
            skipWaiting: true,
            clientsClaim: true,
            cacheId: 'ApiFinder',
            additionalManifestEntries: ['index.html'],
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts\.gstatic\.com/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'google-fonts',
                    }
                },
                {
                    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                    }
                },
                {
                    urlPattern: /^https:\/\/kit\.fontawesome\.com\/175ad7f7dc\.js/,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'fontawesome-fonts-stylesheets',
                    }
                }
            ],

        }),


    ]
};