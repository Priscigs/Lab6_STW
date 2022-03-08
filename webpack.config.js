const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        2: "./src/pages/page2/script11.js",
        3: ["./src/pages/page3/script.js", "./src/pages/page3/script13.js"],
        4: ["./src/pages/page4/script2.js", "./src/pages/page4/script14.js"],
        5: ["./src/pages/page5/script3.js", "./src/pages/page5/script15.js"],
        6: "./src/pages/page6/script7.js",
        7: "./src/pages/page7/script8.js",
        8: "./src/pages/page8/script4.js",
        9: "./src/pages/page9/script9.js",
        10: ["./src/pages/page10/script5.js", "./src/pages/page10/script12.js"],
        11: "./src/pages/page11/script6.js",
        12: "./src/pages/page12/script10.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "bundle_con_babel")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: "index.html",
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page2/2.html",
            filename: "2.html",
            chunks: ['2']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page3/3.html",
            filename: "3.html",
            chunks: ['3']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page4/4.html",
            filename: "4.html",
            chunks: ['4']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page5/5.html",
            filename: "5.html",
            chunks: ['5']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page6/6.html",
            filename: "6.html",
            chunks: ['6']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page7/7.html",
            filename: "7.html",
            chunks: ['7']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page8/8.html",
            filename: "8.html",
            chunks: ['8']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page9/9.html",
            filename: "9.html",
            chunks: ['9']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page10/10.html",
            filename: "10.html",
            chunks: ['10']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page11/11.html",
            filename: "11.html",
            chunks: ['11']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/page12/12.html",
            filename: "12.html",
            chunks: ['12']
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ],
    },
};