const path = require('path')

module.exports = {
  entry: './public/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
              { test: /\.jsx?$/, exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                  presets : ['@babel/react', '@babel/env']
                }
              }
            ]
  }
}