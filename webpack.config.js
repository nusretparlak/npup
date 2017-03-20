module.exports = {
  entry: './src/',
  output: {
    path: './',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules|package/,
        options: {
          cacheDirectory: true,
          presets: ['react', 'es2015', "stage-0"]
        }
      }
    ]
  }
};
