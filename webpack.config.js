module.exports = {
  mode: process.env.NODE_ENV !== 'production' ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
  },
};
