const path = require('path');

module.exports = {
    entry: './src/blender.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'blender.js',
        library: 'blender',
        libraryTarget: 'umd',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
    }
};
