const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                //'loader' is used for using a single loader
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                "test": /\.s?css$/,
                //'use' is used for using multiple loaders
                "use": [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map', //shows the error queue easily for developer, it is used to track the error
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
