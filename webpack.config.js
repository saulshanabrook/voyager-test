const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|css)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
