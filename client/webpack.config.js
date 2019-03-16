
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = env => {
  
  console.log('NODE_ENV: ', env.NODE_ENV); // prod or dev
  console.log('Production: ', env.production); // true or false

  var config = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
        
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },     
    optimization = {
      minimize: env.production
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      })
    ]    
  };

  if (env.NODE_ENV === 'dev') {
    config.devtool = 'eval-source-map';   
  }

   return config;
  };