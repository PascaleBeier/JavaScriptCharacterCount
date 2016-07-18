module.exports = {
    entry: './src/javascript-character-count',
    output: {
        filename: 'dist/javascript-character-count.min.js'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }

        ]
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
}