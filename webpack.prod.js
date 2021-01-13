const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    "sass-loader",
                ]
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            favicon: 'src/assets/imgs/webbrowser-icon.png',
            template: "./src/template.html",
            filename: "./index.html",
            minify: {
                removeAttributesQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new WorkboxPlugin.GenerateSW({
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],
            exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/,],
            skipWaiting: true,
            clientsClaim: true,
            cacheId: 'ApiFinder',
            additionalManifestEntries: [{
                url: 'index.html',
                revision: 'main entry file for project'
            }],
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

        })
    ]
});