"use strict";

module.exports = {
    entry: "./static/scripts/MainScript.js",
    output: {
        filename: "./static/OUTPUT_SCRIPT.js"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            }
        ]
    }
};
