const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'burke.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'burke',
      type: 'umd'
    }
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
}