const path = require('path');

module.exports = {
    entry: './src/Blowfish.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'blowfish.js',
        libraryTarget: 'umd',
        library: 'Blowfish',
        // https://github.com/webpack/webpack/issues/6784
        globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [['@babel/preset-env', {
                        modules: false,
                        loose: true,
                    }]],
                    cacheDirectory: true,
                },
            },
        }],
    },
};
