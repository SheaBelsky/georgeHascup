const ExtractTextPlugin       = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path                    = require("path");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const webpack                 = require("webpack");

const SITE_URL = "http://www.georgehascup.com/";

const plugins = [
    new ExtractTextPlugin({
        filename: "css/styles.css"
    }),
    new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new webpack.DefinePlugin({
        "process.env.SITE_URL": SITE_URL
    })
];

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        path: `${__dirname}/docs`,
        publicPath: SITE_URL,
        filename: "js/bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "docs"),
        historyApiFallback: true,
        open: true,
        port: 3000
    },
    devtool: "eval-source-map",
    mode: "production",
    module: {
        rules: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                loader:  "babel-loader"
            },
            {
                test:   /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:      "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:      ["css-loader", "less-loader"]
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: "url-loader?limit=100000",
                        options: {
                            name: "css/[hash].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader?limit=100000",
                        options: {
                            name: "img/[name].[ext]"
                        }
                    },
                    "img-loader"
                ]
            },
            {
                test: /\.(ico|pdf)$/i,
                use: [
                    "file-loader?name=img/[name].[ext]"
                ]
            }
        ],
    },
    optimization: {
        minimize: true
    },
    plugins: plugins
};
