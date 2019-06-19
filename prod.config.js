const path = require('path');

const createConfig = (target, folder) => ({
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build', folder),
    filename: 'imageSlider.js',
    library: 'imageSlider',
    libraryTarget: target
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  },
  mode: 'production'
});

module.exports = [
  createConfig('var', 'browser'),
  createConfig('commonjs2', 'commonjs')
];
