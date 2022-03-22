const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: path.join(__dirname, "src", "index.js"),
  // what is __dirname https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname 
  // https://www.w3schools.com/nodejs/met_path_join.asp

  // https://webpack.js.org/concepts/output/
  output: {
    path:path.resolve(__dirname, "dist"),
  },

  // https://webpack.js.org/configuration/module/#rule
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },

  plugins: [
    // https://webpack.js.org/plugins/html-webpack-plugin/  
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}