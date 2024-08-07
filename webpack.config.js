const path = require('path');

module.exports = {
  mode: 'production',  // Make sure this is set to production
  entry: './src/index.js',  // Your main entry point
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js'  // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
