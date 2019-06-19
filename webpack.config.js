const path = require('path');

const createConfig = (target, folder) => ({
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build', folder),
    publicPath: 'build/' + folder,
    filename: 'imageSlider.js',
    library: 'imageSlider',
    libraryTarget: target
  },
  module: {
    rules: [
      { test: /\.css/i, use: ['style-loader', 'css-loader'] },
      { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 3000
  }
});

module.exports = [
  createConfig('var', 'browser'),
];
