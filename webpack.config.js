const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { appName, outputPath } = require("./qlik.config");
const cwd = process.cwd();
const createQextFile = require("./createQextFile");

createQextFile();

module.exports = {
    entry: path.join(cwd, "src", "index.js"),    
    output: {
        filename: appName + ".js",
        path: outputPath,
        library: {
            type: "amd"
        }
    },
    target: ["web", "es5"],
    plugins: [
        new MiniCssExtractPlugin({
            filename: _ => `${appName}.css`
        }),
        new webpack.DefinePlugin({
            "process.env.APP_NAME": JSON.stringify(appName)
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.html/,
                use: ["html-loader"]
            }
        ]
    },
    externals: {
        qlik: "qlik",
        qr: "require",
        jquery: "jquery"
    }
};