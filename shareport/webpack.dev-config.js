const path = require('path');

const srcIndex = path.join(__dirname, '/client/src/index.jsx');
const distPath = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: srcIndex,
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
}