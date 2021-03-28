const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'built'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    
};