import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    context: path.resolve('./client/src'),
    entry: './index',
    output: {
        path: path.resolve('./client/dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.json$/, loader: "json-loader" },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}
