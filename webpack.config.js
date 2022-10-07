const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'blender.js',
        library: 'blender',
        libraryTarget: 'umd',
        publicPath: '/',
        globalObject: 'this',
    },
    devServer: {
        contentBase: './dist',
    }
};
