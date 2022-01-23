const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

const path = require('path');

const config = {
  
  entry: {
    index: './src/index/index.js',
 
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    static: './dist',
  },
  

  module: {

   

    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
     
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
     
      {
        test: /\.(png|jpe?g|gif)$/i,
        
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
         
        },
      },
      {
        test: /\.mp3$/,
        
        loader: 'file-loader'
      }
    ]
   
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index/index.html',
      title:'cooking palace Nft play'
      
    }),
   
  
  ],
 
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool ='inline-source-map',
    console.log('desenvolvedor')
  }

  if (argv.mode === 'production') {
    console.log('producao')
  }

  return config;
};

