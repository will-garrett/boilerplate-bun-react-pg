const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/index.tsx', 

  // Output settings
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js' // Name of the output file
  },

  // File resolutions
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Resolve these file extensions
  },

  // Module rules to handle different file types
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Rule for .ts and .tsx files
        use: 'ts-loader', // Use ts-loader to transpile TypeScript files
        exclude: /node_modules/, // Exclude node_modules from transpiling
      },
      {
        test: /\.(js|jsx)$/, // Rule for .js and .jsx files
        use: 'babel-loader', // Use babel-loader for JavaScript transpilation
        exclude: /node_modules/, // Exclude node_modules
      },
      {
        test: /\.html$/, // Rule for .html files
        use: 'html-loader', // Use html-loader to handle HTML files
      },
      {
        test: /\.(css)$/, // Rule for .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
    ],
  },

  // Plugins configuration
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your index.html file as the template
    }),
  ],

  // Webpack dev server configuration for local development
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true, // Enable gzip compression
    port: 3000, // Set the development server port
  },

  // Mode can be 'development' or 'production'
  mode: 'development', // Change to 'production' for production build
};